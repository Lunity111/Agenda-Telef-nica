const app1 = {
    data(){
        return{
            mensaje: '',
            contacts:[{name:'Emergency',phone:'911',type:'Emergency', mss: 0, calls: 0,total:0}],
            newName:'',
            newPhone:'',
            newType:'',


        }
    },
    computed:{
        totalContacts(){
            return this.contacts.length;
        },
        totalMss(){
            return this.contacts.reduce((total,contact) => total + contact.mss,0);
        }, 
        totalCalls(){
            return this.contacts.reduce((total,contact) => total + contact.calls,0);
        }
    },
    methods:{
        add:function(){
            if(this.newName)
            this.contacts.push({name:this.newName, phone:this.newPhone, type:this.newType, mss:0, calls:0});
            this.newName='';
            this.newPhone='';
            this.newType='';

        }, 
        borrar:function(index){
            this.contacts.splice(index,1);
        }

    },
};
const apli2 = Vue.createApp(app1).mount('#seccion');