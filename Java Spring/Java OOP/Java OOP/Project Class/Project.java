public class Project {
    // object attributes
    private String name;
    private String desc;
    public Project(){
        this("Name", "Desc");
    }
    public Project(String name){
        this.name = name; 
    }
    public Project(String name, String desc){
        this.name = name;
        this.desc = desc;
    }
    public String elevatorPitch(){
        return this.name + ": " + this.desc;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setDesc(String desc){
        this.desc = desc;
    }
    public String getName(){
        return this.name;
    }
    public String getDesc(){
        return this.desc;
    }
}
