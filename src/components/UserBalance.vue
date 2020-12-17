<template>
    <div id="UserBalance" class="user_balance">
        <h2>{{username}}</h2>
        <h2>Tu saldo es: <span>  {{balance}} COP </span> </h2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserBalance',
    data: function (){
        return {
            username: "none",
            balance: 0
        }
    },

    created: function(){
        this.username = this.$route.params.username

        let self = this
        axios.get("http://127.0.0.1:8000/user/balance/" + this.username).then((result) => {
            self.balance = result.data.balance
        })
    }
}
</script>


<style>
    #UserBalance{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
    }

    #UserBalance h2{
        font-size: 50px;
        color: #283747;
    }

    #UserBalance span{
        color: crimson;
        font-weight: bold;
    }
</style>