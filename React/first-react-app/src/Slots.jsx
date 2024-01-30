export default function Slots() {
    const slot = () => {
       const num = Math.floor(Math.random() * 3) + 1;
       switch (num){
        case 1 :
            return "🍒"
        case 2:
            return "🍌"
        case 3:
            return "🍊"
       }
    
    }

    return (
        <div>
            <p>{slot()}{slot()}{slot()}</p>
        </div>
    );
}

