<template>
    <div id="footer">
        <div id="footer_left">
            <p>Created by:Quốc Cường</p>
            <img id="footer_img" src="https://png.pngtree.com/png-vector/20200417/ourmid/pngtree-cartoon-design-of-little-doctor-with-shield-fighting-coronavirus-png-image_2188771.jpg" alt="">
        </div>
        <p style=" padding-right:30px ;">Data source: ..........................................................................</p>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style>
    #footer
    {
        display: flex;
        flex-wrap:wrap;
        background: #35393c;
        height: 65px;
        color: white;
        font-size: 18px;
        align-items:center;
        box-sizing: border-box;
    }
    #footer_img
    {
        width: 22px;
        height: 22px;
        color: yellowgreen;
        border-radius: 50%;
        margin-left: 7px;
        margin-top:17px;
    }
    #footer p 
    {
        align-items: center;
        padding-left:20px ;
       
    }
    #footer_left
    {
        flex:1;
        display: flex;
        flex-wrap:nowrap;
        
    }
       @media only screen and (max-width: 730px) {
    #footer_left
    {
        flex:none;
    }
    }
</style>