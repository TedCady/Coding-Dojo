import java.util.Scanner;

public class PythagoreanTest {
    public static void main(String[] args){
        var scanner = new Scanner(System.in);
        int A = scanner.nextInt();
        int B = scanner.nextInt();
        double hypotenuse = new Pythagorean().calculateHypotenuse(A, B);
        System.out.println(hypotenuse);
    }
}
