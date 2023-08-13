import { Exercise } from "@/types/types";

interface TodoProps {
    res: Exercise;
}


const Todo: React.FC<TodoProps> = ({res}) => {
    return ( 
        <div>
            HELLO
            {res.desc}
        </div>
     );
}
 
export default Todo;
    
