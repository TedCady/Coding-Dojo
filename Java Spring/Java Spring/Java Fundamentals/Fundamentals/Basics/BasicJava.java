import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class BasicJava {
    public static void main(String[] args){
        allNum();
        oddNum();
        printSum();
        iterateArray();
        findMax();
        printAverage();
        oddArray();
        greaterThanY();
        xSquared();
        replaceNegatives();
        arrMaxMinAvg();
        shiftArray();
    }
    public static void allNum(){
        for(int i = 1; i <= 255; i++){
            System.out.println(i);
        }
    }
    public static void oddNum(){
        for(int i = 1; i <= 255; i++){
            if(i % 2 != 0){
                System.out.println(i);
            }
        }
    }    
    public static void printSum(){
        int newNum = 0;
        for(int i = 1; i <= 255; i++){
            newNum += i;
            System.out.println("New number: " + i + " Sum: " + newNum);
        }
    } 
    public static void iterateArray(){
        int[] arr = {1,3,5,7,9,13};
        for(int i = 0; i < arr.length; i++){
            System.out.println(arr[i]);
        }
    }  
    public static void findMax(){
        int[] arr = {1,3,5,7,9,13, -7, -2};
        int bigBoi = arr[0];
        for(int i = 0; i < arr.length; i++){
            if(arr[i] > bigBoi){
                bigBoi = arr[i];
            }
        }
        System.out.println("Max value: " + bigBoi);
    } 
    public static void printAverage(){
        int[] arr = {8, 4, 2, 10, -6, 1, -20, 1};
        int avg = 0;
        for(int i = 0; i < arr.length; i++){
            avg += arr[i];
        }
        double output = avg / arr.length;
        System.out.println("Average: " + output);
    }
    public static void oddArray(){
        ArrayList<Integer> y = new ArrayList<Integer>();
        for(int i = 1; i <= 255; i++){
            if(i % 2 != 0){
                y.add(i);
            }
        }
        System.out.println("Odd array: " + y.toString());
    }    
    public static void greaterThanY(){
        int[] arr = {1, 3, 5, 7};
        int y = 3;
        int counter = 0;
        for(int i = 0; i < arr.length; i++){
            if(arr[i] > y){
                counter++;
            }
        }
        System.out.println("Numbers greater than " + y + " within array: " + counter);
    }
    public static void xSquared(){
        int[] arr = {1, 3, 5, 7, 1, 5, 10, -2};
        for(int i = 0; i < arr.length; i++){
            arr[i] *= arr[i];
        }
        System.out.println("Array squared values: " + Arrays.toString(arr));
    }
    public static void replaceNegatives(){
        int[] arr = {1, 3, 5, 7, 1, 5, 10, -2};
        for(int i = 0; i < arr.length; i++){
            if(arr[i] < 0){
                arr[i] = 0;
            }
        }
        System.out.println("Replaced negatives: " + Arrays.toString(arr));
    }
    public static void arrMaxMinAvg(){
        int[] arr = {1, 3, 5, 7, 1, 5, 10, -2};
        int max = arr[0];
        int min = arr[0];
        int avg = 0;
        for(int i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
            if(arr[i] < min){
                min = arr[i];
            }
            avg += arr[i];
        }
        int output = avg / arr.length;
        int[] outputArr = {max, min, output};
        System.out.println(Arrays.toString(outputArr));
    }
    public static void shiftArray(){
        int[] arr = {1, 3, 5, 7, 1, 5, 10, -2};
        for(int i = 0; i < arr.length - 1; i++){
            arr[i] = arr[i + 1];
            arr[i + 1] = 0;          
        }
        System.out.println("Shifted array values: " + Arrays.toString(arr));
    }    
}