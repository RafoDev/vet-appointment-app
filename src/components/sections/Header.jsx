const Header = ({company}) => {
    const {name, slogan} = company;
    return (
    <header className='header container text-center text-light py-3'>
        <h2 className='header__name fs-1'>{name}</h2>
        <h1 className='fs-6 fst-italic'>{slogan}</h1>    
    </header>
    );
}

export default Header;