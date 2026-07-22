function studentScore(){
    const grade = 70; 
    switch(true)
    {
        case(grade >= 90):
        console.log("Grade A");
        break;
        case(grade >=80):
        console.log("grade B")
        break;
        default:
        console.log("grade c or below");
    }
    
}
studentScore();