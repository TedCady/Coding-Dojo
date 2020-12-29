import java.util.ArrayList;

public class ExceptionList {
    public static void main(String[] args){
        exceptionList();
    }
    public static void exceptionList(){
        ArrayList<Object> myList = new ArrayList<Object>();        
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");
        for(int i = 0; i < myList.size(); i++) {
            try{
                Integer castedValue = (Integer) myList.get(i);
            } catch(Exception e){
                System.out.println("Error at index (" + i + "); Value of object: " + myList.get(i));
            }
        }
        
    }
}
