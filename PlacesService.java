
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.URI;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class PlacesService {
    private static final Map<String, String> MOCK = new HashMap<>();

    private static String keyFor(String country, String state, String city) {
        String c = country == null ? "" : country.trim().toLowerCase();
        String s = state == null ? "" : state.trim().toLowerCase();
        String ci = city == null ? "" : city.trim().toLowerCase();
        return c + "/" + s + "/" + ci;
    }

    public static void main(String[] args) throws Exception {
        seed();
        int port = 8080;
        try {
            String envPort = System.getenv("PORT");
            if (envPort != null && !envPort.isEmpty()) {
                port = Integer.parseInt(envPort);
            }
        } catch (Exception ignored) {}
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/api/health", exchange -> sendJson(exchange, 200, "{\"ok\":true}"));
        server.createContext("/api/search", new SearchHandler());
        server.setExecutor(null);
        server.start();
        System.out.println("Java data service running on http://0.0.0.0:" + port);
    }

    static class SearchHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (!"GET".equals(exchange.getRequestMethod())) {
                sendJson(exchange, 405, "{\"error\":\"method not allowed\"}");
                return;
            }
            URI uri = exchange.getRequestURI();
            Map<String, String> params = parseQuery(uri.getRawQuery());
            String country = params.getOrDefault("country", "");
            String state = params.getOrDefault("state", "");
            String city = params.getOrDefault("city", "");
            String key = keyFor(country, state, city);
            String data = MOCK.get(key);
            if (data == null) {
                sendJson(exchange, 404, "{\"error\":\"not found\"}");
            } else {
                sendJson(exchange, 200, data);
            }
        }
    }

    private static void sendJson(HttpExchange exchange, int code, String body) throws IOException {
        byte[] bytes = body.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().add("Content-Type", "application/json; charset=utf-8");
        exchange.sendResponseHeaders(code, bytes.length);
        OutputStream os = exchange.getResponseBody();
        os.write(bytes);
        os.close();
    }

    private static Map<String, String> parseQuery(String query) {
        Map<String, String> map = new HashMap<>();
        if (query == null || query.isEmpty()) return map;
        for (String pair : query.split("&")) {
            String[] kv = pair.split("=", 2);
            String k = urlDecode(kv[0]);
            String v = kv.length > 1 ? urlDecode(kv[1]) : "";
            map.put(k, v);
        }
        return map;
    }

    private static String urlDecode(String s) {
        return URLDecoder.decode(s, StandardCharsets.UTF_8);
    }

    private static void seed() {
        // Mumbai
        MOCK.put("india/maharashtra/mumbai", "{\n" +
                "  \"type\":\"city\",\n" +
                "  \"displayName\":\"Mumbai, Maharashtra, India\",\n" +
                "  \"coordinates\": {\"lat\":19.076, \"lon\":72.8777},\n" +
                "  \"bestSeason\":\"November – February (cooler, drier)\",\n" +
                "  \"foods\":[\n" +
                "    {\"name\":\"Vada Pav\",\"blurb\":\"Mumbai's iconic street snack.\"},\n" +
                "    {\"name\":\"Pav Bhaji\",\"blurb\":\"Buttery mashed veggie curry with bread.\"},\n" +
                "    {\"name\":\"Bombil Fry\",\"blurb\":\"Crispy Bombay duck fish fry.\"}\n" +
                "  ],\n" +
                "  \"weatherAlerts\":[{\"severity\":\"info\",\"title\":\"Monsoon advisory\",\"detail\":\"Intermittent heavy showers possible this week.\"}],\n" +
                "  \"attractions\":[\n" +
                "    {\"name\":\"Gateway of India\",\"type\":\"landmark\",\"desc\":\"1911 Indo-Saracenic arch on the waterfront.\",\"rating\":4.6},\n" +
                "    {\"name\":\"Sanjay Gandhi National Park\",\"type\":\"park\",\"desc\":\"Urban jungle with Kanheri Caves.\",\"rating\":4.5},\n" +
                "    {\"name\":\"Chhatrapati Shivaji Maharaj Vastu Sangrahalaya\",\"type\":\"museum\",\"desc\":\"Premiere museum of art & history.\",\"rating\":4.6},\n" +
                "    {\"name\":\"Asiatic Society of Mumbai Library\",\"type\":\"library\",\"desc\":\"Neoclassical library & town hall.\",\"rating\":4.4},\n" +
                "    {\"name\":\"Leopold Cafe\",\"type\":\"restaurant\",\"desc\":\"Colaba staple for global bites.\",\"rating\":4.2}\n" +
                "  ],\n" +
                "  \"hotels\":[\n" +
                "    {\"name\":\"Trident Nariman Point\",\"price\":165,\"stars\":5,\"link\":\"#\"},\n" +
                "    {\"name\":\"Hotel Suba Palace\",\"price\":80,\"stars\":3,\"link\":\"#\"},\n" +
                "    {\"name\":\"Abode Bombay\",\"price\":110,\"stars\":4,\"link\":\"#\"},\n" +
                "    {\"name\":\"Backpacker Panda Colaba\",\"price\":18,\"stars\":2,\"link\":\"#\"}\n" +
                "  ]\n" +
                "}");

        // San Francisco
        MOCK.put("usa/california/san francisco", "{\n" +
                "  \"type\":\"city\",\n" +
                "  \"displayName\":\"San Francisco, California, USA\",\n" +
                "  \"coordinates\": {\"lat\":37.7749, \"lon\":-122.4194},\n" +
                "  \"bestSeason\":\"September – October (warm, less fog)\",\n" +
                "  \"foods\":[\n" +
                "    {\"name\":\"Mission Burrito\",\"blurb\":\"Overstuffed SF classic.\"},\n" +
                "    {\"name\":\"Cioppino\",\"blurb\":\"Italian‑American seafood stew.\"},\n" +
                "    {\"name\":\"Sourdough Bread\",\"blurb\":\"Tangy loaves from the docks.\"}\n" +
                "  ],\n" +
                "  \"weatherAlerts\":[],\n" +
                "  \"attractions\":[\n" +
                "    {\"name\":\"Golden Gate Park\",\"type\":\"park\",\"desc\":\"Green heart of the city.\",\"rating\":4.8},\n" +
                "    {\"name\":\"de Young Museum\",\"type\":\"museum\",\"desc\":\"Art from the Americas & beyond.\",\"rating\":4.6},\n" +
                "    {\"name\":\"Main Library\",\"type\":\"library\",\"desc\":\"Civic Center public library.\",\"rating\":4.4},\n" +
                "    {\"name\":\"Ferry Building\",\"type\":\"landmark\",\"desc\":\"Marketplace & icon on the Bay.\",\"rating\":4.6},\n" +
                "    {\"name\":\"Tartine Bakery\",\"type\":\"restaurant\",\"desc\":\"Beloved bakery & cafe.\",\"rating\":4.6}\n" +
                "  ],\n" +
                "  \"hotels\":[\n" +
                "    {\"name\":\"Hotel Nikko\",\"price\":190,\"stars\":4,\"link\":\"#\"},\n" +
                "    {\"name\":\"HI SF Downtown Hostel\",\"price\":35,\"stars\":2,\"link\":\"#\"},\n" +
                "    {\"name\":\"Fairmont San Francisco\",\"price\":260,\"stars\":5,\"link\":\"#\"},\n" +
                "    {\"name\":\"Hotel Zoe Fisherman's Wharf\",\"price\":170,\"stars\":4,\"link\":\"#\"}\n" +
                "  ]\n" +
                "}");

        // Tokyo
        MOCK.put("japan/tokyo/tokyo", "{\n" +
                "  \"type\":\"city\",\n" +
                "  \"displayName\":\"Tokyo, Japan\",\n" +
                "  \"coordinates\": {\"lat\":35.6762, \"lon\":139.6503},\n" +
                "  \"bestSeason\":\"Mar–Apr (sakura) & Oct–Nov (foliage)\",\n" +
                "  \"foods\":[\n" +
                "    {\"name\":\"Sushi\",\"blurb\":\"World‑class fish & rice.\"},\n" +
                "    {\"name\":\"Ramen\",\"blurb\":\"Brothy comfort in many styles.\"},\n" +
                "    {\"name\":\"Tempura\",\"blurb\":\"Crisp, delicate fry.\"}\n" +
                "  ],\n" +
                "  \"weatherAlerts\":[{\"severity\":\"warning\",\"title\":\"Typhoon watch\",\"detail\":\"High winds possible over the weekend.\"}],\n" +
                "  \"attractions\":[\n" +
                "    {\"name\":\"Ueno Park\",\"type\":\"park\",\"desc\":\"Museums, zoo, cherry blossoms.\",\"rating\":4.7},\n" +
                "    {\"name\":\"Tokyo National Museum\",\"type\":\"museum\",\"desc\":\"Japan's oldest & largest museum.\",\"rating\":4.7},\n" +
                "    {\"name\":\"National Diet Library\",\"type\":\"library\",\"desc\":\"Japan's national library.\",\"rating\":4.5},\n" +
                "    {\"name\":\"Senso‑ji\",\"type\":\"landmark\",\"desc\":\"Ancient Buddhist temple in Asakusa.\",\"rating\":4.8},\n" +
                "    {\"name\":\"Ichiran Ramen\",\"type\":\"restaurant\",\"desc\":\"Solo‑booth tonkotsu specialists.\",\"rating\":4.4}\n" +
                "  ],\n" +
                "  \"hotels\":[\n" +
                "    {\"name\":\"Park Hotel Tokyo\",\"price\":140,\"stars\":4,\"link\":\"#\"},\n" +
                "    {\"name\":\"Shinjuku Granbell Hotel\",\"price\":110,\"stars\":3,\"link\":\"#\"},\n" +
                "    {\"name\":\"The Ritz‑Carlton Tokyo\",\"price\":380,\"stars\":5,\"link\":\"#\"},\n" +
                "    {\"name\":\"Khaosan Tokyo Origami\",\"price\":28,\"stars\":2,\"link\":\"#\"}\n" +
                "  ]\n" +
                "}");
    }
}
