import Client from "../core/Client";

interface TableProps {
    clients: Client[]
}
export default function Table(props:TableProps){
    return(
        <table>
            {props.clients[1].name}
        </table>
    )
}