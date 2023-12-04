
function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div>
            <p className="text-timberWolf font-poppins font-thin">Copyright &copy; {currentYear} All rights reserved </p>
        </div>
    )
}

export default Footer
