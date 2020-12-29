import java.util.HashMap;
import java.util.Set;

public class TrackList {
    public static void main(String[] args){
        trackList();
    }
    public static void trackList(){        
        HashMap<String, String> trackHM = new HashMap<String, String>();
        trackHM.put("Like a Rolling Stone","Once upon a time you dressed so fine");
        trackHM.put("Respect","What you want, baby, I got");
        trackHM.put("My Generation","People try to put us d-down");
        trackHM.put("What'd I Say","Hey mama, don't you treat me wrong");
        String song = trackHM.get("My Generation");
        System.out.println("'Pull out one of the songs by its track title': " + song);
        Set<String> keys = trackHM.keySet();
        for(String key: keys){
            System.out.println("Key: " + key + "; Value: " + trackHM.get(key));
        }
    }
}
