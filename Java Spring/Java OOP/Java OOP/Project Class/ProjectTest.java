public class ProjectTest {
    public static void main(String[] args){
        Project projOne = new Project();
        Project projTwo = new Project();
        projOne.setName("Proj One");
        projOne.setDesc("Proj One desc");
        projTwo.setName("Proj Two");
        projTwo.setDesc("Proj Two desc");
        System.out.println(projOne.getName());
        System.out.println(projOne.getDesc());
        System.out.println(projTwo.getName());
        System.out.println(projTwo.getDesc());
        System.out.println(projOne.elevatorPitch());
        System.out.println(projTwo.elevatorPitch());
    }
}
