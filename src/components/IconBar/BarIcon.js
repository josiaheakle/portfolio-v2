

const BarIcon = (props) => {
    // props : {iconName} (for display purposes, just the end of the classname)
    //         {iconActive} (bool - if true, show icon is clicked)
    //         {click('iconName')} 

    const handleClick = () => {
        props.click(props.iconName);
    }

    return (
        <div className={`icon-container ${props.iconName} ${(props.iconActive === true)?'active':'not-active'}`}>
            <i onClick={handleClick} className={`fi-rr-${props.iconName} icon ${(props.iconActive === true)?'active':'not-active'}`} />
        </div>
    );

}

export default BarIcon;