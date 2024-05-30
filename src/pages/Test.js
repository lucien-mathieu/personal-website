function Test() {
    return (
        <div>
            <h1>La page de test marche</h1>
            <button name='button_home_page' onClick={Home_page}>
              Home page
            </button>
        </div>
    );
}

function Home_page() {
    window.location.href = "/"
}

export default Test;