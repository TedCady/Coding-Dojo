import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class PuzzleJava {
    public static void main(String[] args){
        task1();
        task2();
        task3();
        task4();
        task5();
        task6();
        task7();
    }
    public static Character[] alphabetSoup(String switchAV){
        if(switchAV == "alphabet"){
            Character[] alphabet = {
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
                's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
            };
            return alphabet;
        }
        else{
            Character[] vowel = {'a', 'e', 'i', 'o', 'u'};
            return vowel;
        }
    }
    public static void task1(){
        int[] arr = {3, 5, 1, 2, 7, 9, 8, 13, 25, 32};
        ArrayList<Integer> greaterThan10 = new ArrayList<Integer>();
        int sum = 0;
        for(int i = 0; i < arr.length; i++){
            sum += arr[i];
            if(arr[i] > 10){
                greaterThan10.add(arr[i]);
            }            
        }
        System.out.println("Sum: " + sum + "; Num > 10: " + greaterThan10.toString());
    }
    public static void task2(){
        String[] arr = {"Nancy", "Jinichi", "Fujibayashi", "Momochi", "Ishikawa"};
        List<String> arrList = Arrays.asList(arr);
        ArrayList<String> greaterThan5 = new ArrayList<String>();
        Collections.shuffle(arrList);
        for(String s: arrList){
            System.out.println(s);
        }
        for(int i = 0; i < arr.length; i++){
            System.out.println(arr[i]);
            if(arr[i].length() >= 5){
                greaterThan5.add(arr[i]);
            }
        }
        System.out.println(greaterThan5.toString());
    }
    public static void task3(){
        Character[] alphabet = alphabetSoup("alphabet");
        Character[] vowel = alphabetSoup("vowel");
        List<Character> alphabetList = Arrays.asList(alphabet);
        Collections.shuffle(alphabetList);
        Character firstLetter = alphabetList.get(0);
        Character lastLetter = alphabetList.get(25);
        System.out.println("Last Letter: " + lastLetter);
        for(int i = 0; i < vowel.length; i++){
            if(firstLetter == vowel[i]){
                System.out.println("First Letter is a vowel: " + firstLetter);
                break;
            }
            else{
                System.out.println("First Letter: " + firstLetter);
                break;
            }
        }
    }
    public static void task4(){
        ArrayList<Integer> arr = new ArrayList<Integer>();
        for(int i = 1; i <= 10; i++){
            int x = new Random().nextInt(100);
            while(x < 55){
                x = new Random().nextInt(100);
            }
            arr.add(x);
        }
        System.out.println("Random array: " + arr.toString());
    }
    public static void task5(){
        ArrayList<Integer> arr = new ArrayList<Integer>();
        int min = 100;
        int max = 55;
        for(int i = 1; i <= 10; i++){
            int x = new Random().nextInt(100);
            while(x < 55){
                x = new Random().nextInt(100);                
            }
            if(x < min){
                min = x;
            }
            if(x > max){
                max = x;
            }
            arr.add(x);
        };
        Collections.sort(arr);     
        System.out.println("Random array (sorted): " + arr.toString() + "; Min: " + min + "; Max: " + max);
    }
    public static void task6(){
        Character[] alphabet = alphabetSoup("alphabet");
        char[] chars = new char[5];
        String output = "";
        for(char c: chars){
            int i = new Random().nextInt(25);
            c = alphabet[i];
            output += c;
        }
        System.out.println("Random string: " + output);
    }
    public static void task7(){
        Character[] alphabet = alphabetSoup("alphabet");
        char[] chars = new char[5];
        String[] tenRandy = new String[10];
        for(int i = 0; i < tenRandy.length; i++){
            tenRandy[i] = "";
            for(char c: chars){
                int x = new Random().nextInt(25);
                c = alphabet[x];
                tenRandy[i] += c;
            }
        }
        System.out.println("Random string (array): " + Arrays.toString(tenRandy));
    }                
}
