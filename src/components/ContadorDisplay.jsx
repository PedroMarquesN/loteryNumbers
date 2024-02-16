import './ContadorDisplay.css';

export default function ContadorDisplay(props) {

    return (
        <div className="contador-display slide-animation pulse-animation">
            {props.numero}
        </div>
    )

}