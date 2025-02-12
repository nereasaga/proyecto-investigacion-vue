<template>
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2024 Vue Investigation. Todos los derechos reservados.</p>
            <div class="social-links">
                <a href="https://www.instagram.com" target="_blank" class="icon"><i class="uil uil-instagram"></i></a>
                <a href="https://www.twitter.com" target="_blank" class="icon"><i class="uil uil-twitter"></i></a>
                <a href="https://www.facebook.com" target="_blank" class="icon"><i class="uil uil-facebook"></i></a>
                <a href="https://www.linkedin.com" target="_blank" class="icon"><i class="uil uil-linkedin"></i></a>
            </div>
        </div>
    </footer>
</template>


<style scoped>
   .footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 15px 10px;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.footer p{
    margin: 0;
    font-size: 14px;
    
}
.social-links{
    display: flex;
    gap: 15px;
}
.icon{
    font-size: 24px;
    color: white;
    text-decoration: none;
    transition: 0.3s;
}
.icon:hover{  color: #ff7b72; 

}
</style>