

const BarIcon = (props) => {
    // props : {iconName} (for display purposes, just the end of the classname)
    //         {iconActive} (bool - if true, show icon is clicked)
    //         {click('iconName')} 
    //         {title}

    const handleClick = () => {
        props.click(props.iconName);
    }

    const handleEnter = (e) => {
        if(e.key==='Enter') {
            handleClick();
        }
    }

    return (
        <div className={`icon-container ${props.iconName} ${(props.iconActive === true)?'active':'not-active'}`}>
            <i onKeyPress={handleEnter} tabIndex={(props.iconActive)?'-1':'0'} title={props.title} onClick={handleClick} className={`fi-rr-${props.iconName} icon ${(props.iconActive === true)?'active':'not-active'}`} />
        </div>
    );

}

export default BarIcon;