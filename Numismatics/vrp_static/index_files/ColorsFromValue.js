function variatyTypeColor(type) {
    switch (type) {
    case "Спорная разновидность":

    case "Крайне спорная разновидность":

    case "добавлена по текстовому описанию":

    case "На заметку":
        return "blue"

    case "Фальшак (подделка для обращения)":

    case "Фальшак (подделка для обращения); краденый штемпель":
    case "спорное происхождение (монетный двор или фальшак)":
        return "gray"
    case "Фуфло (подделка для коллекционеров)":

    case "Возможно, фуфло для коллекционеров":
        return "red"
    default:
        return "black"
    }
}

function rarity(value){

    if (isNaN(value)){
        switch(value){

        case "немного реже":
        case "реже":
        case "намного реже":
            return "blue"

        case "редко":
        case "R":
        case "очень редкая":
            return "red"

        case "частая":
        default:
            return "black";
        }
    }
    else{
        var v = parseFloat(value)
        if (v>=30){
           return "red"
        }
        if (v>=3){
           return "blue"
        }
        return "black";
    }
}

function imageFromStatus(status){
    if (status === "Коллекция, нужна замена"){
            return "replace_need.png"
    }
    return "checked.png"
}
