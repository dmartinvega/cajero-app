<template>
    <div id="UserTransaction">
        <div class="continer_user_transaction">
            <h2> Transacción {{username}}</h2>

            <form v-on:submit.prevent="processTransaction" >
                <input type="tetx" v-model="value" placeholder="Valor">
                <br>
                <button type="submit">Hacer Transacción</button>
            </form>

        </div>
    </div>
</template>


<script>

import axios from 'axios';
export default {
    name: "UserTransaction",
    data: function(){
        return{
            username: "none",
            value: ""
        }
    },

    methods:{
        processTransaction: function(){
            var self = this
            let transaction_in = {
                username: this.username,
                value: this.value
            }
            axios.put("http://127.0.0.1:8000/user/transaction/", transaction_in,  {headers: {}})
                .then((result) => {
                    alert("Transaction Correcta, Saldo Restante: " + result.data.actual_balance);
                    
                })
                .catch((error) => {
                      alert("ERROR Transaction Incorrecta: Saldo Insuficiente");
                });
        }
    },

    created: function(){
        this.username = this.$route.params.username
    }

}
</script>


<style>
    #UserTransaction{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .continer_user_transaction {
        border: 3px solid  #283747;
        border-radius: 10px;

        width: 25%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #UserTransaction h2{
        color: #283747;

    }

    #UserTransaction form{
        width: 50%;
        
    }

    #UserTransaction input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #283747;
        
    }

    

    #UserTransaction button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }

    #UserTransaction button:hover{
        color: #E5E7E9;
        background: crimson;
        border: 1px solid #283747;
    }
</style>