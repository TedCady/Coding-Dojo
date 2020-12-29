public class StringManipulatorTest {
    public static void main(String[] args){
        StringManipulator manipulator = new StringManipulator();
        String str = manipulator.trimAndConcat("  Hello  ", "     World                ");
        String word = "Hello";
        String subString = "llo";
        String notSubString = "world";
        String word2 = manipulator.concatSubstring("Hello", 1, 2, "world");
        char letter = 'o';
        int a = manipulator.getIndexOrNull("Coding", letter);
        int b = manipulator.getIndexOrNull("Hello World", letter);
        int c = manipulator.getIndexOrNull("Hi", letter);
        int a2 = manipulator.getIndexOrNull(word, subString);
        int b2 = manipulator.getIndexOrNull(word, notSubString);        
        int[] output = {a, b, c, a2, b2};
        System.out.println(str);
        for(int i = 0; i < output.length; i++){
            if(output[i] >= 0){
                System.out.println(output[i]);
            }
            else{
                System.out.println("null");
            }
        }
        System.out.println(word2);
    }   
}

