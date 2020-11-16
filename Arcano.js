export default class Arcano{
    constructor(button, container ){
        this.button = document.querySelector(button)
        this.container = document.querySelector(container)
        this.imagens = [
            "https://st4.depositphotos.com/16418170/22329/v/1600/depositphotos_223292296-stock-illustration-tarot-card-major-arcana-fool.jpg",   
            "https://loja.simbolika.com.br/media/catalog/product/cache/3/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/l/s/lsc326-golden-wirth-tarot-grand-trumps-capa.jpg",       
            "https://i0.wp.com/donseluz.com.br/wp-content/uploads/2020/03/carta_da_semana_a_imperatriz_.png?fit=300%2C513&ssl=1",
            "https://4.bp.blogspot.com/-f0QAUK0CxTk/U-goJar-DwI/AAAAAAAAQ1Y/toErn0Pw168/s1600/imperador2.jpg",
            "https://1.bp.blogspot.com/-rvrWu4ZtHRc/WB9qz2lpkrI/AAAAAAAADFU/Oqdrs8VKW78nci-XbJ8e0SIHTKQhsRyFwCLcB/s1600/hierofante5.jpg",
            "https://static.wixstatic.com/media/0cf75f_793178c18ea4441c80949561ec016ab3~mv2.jpg",
            "https://wiki.deldebbio.com.br/images/thumb/RWS-07-Chariot.jpg/200px-RWS-07-Chariot.jpg",
            "https://donseluz.com.br/wp-content/uploads/2019/06/carta_da_semana-justica.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrT2zKKRC1qcqYxS0rehtSom8rJtGjNgKMAg&usqp=CAU",
            "https://lh3.googleusercontent.com/proxy/aMR_VQPQnb8j6jIJdArmv6dtwRy1h95fUJNBREKueJwYRoZpVk2uBfpyG50IuVwBhJi3Ee8cKfGtTofxlQfHaRdTaDuhIsPb_4IFAxbQFiP16pykl-SLEUAAX3BN00L6XERFk6zrBQvi",
            "https://4.bp.blogspot.com/-tB4OlkGTKBM/WIa7GKyGGkI/AAAAAAAADOs/8APWoNvI-tAIJ03LVXUgR1SWYk6hvgYzACLcB/s1600/for%25C3%25A7a%2B%25281%2529.jpg",
            "https://i.pinimg.com/474x/4b/6e/95/4b6e95d858c6816e01094adcb5834ba9--le-tarot-tarot-decks.jpg",
            "https://static.wixstatic.com/media/5e5978_0f15dedb69e94e159496af9b867d7490~mv2.jpg/v1/fill/w_549,h_908,al_c,q_90/5e5978_0f15dedb69e94e159496af9b867d7490~mv2.jpg",
            "https://cdn.astrocentro.com.br/blog/wp-content/uploads/2013/12/03205524/a-temperan%C3%A7a-tarot-mitologico.jpg",
            "https://lotusesoterismo.com.br/wp-content/uploads/2014/12/diabo-tarot.jpg",
            "https://www.mariahelena.pt/img/uploads/473x857_a60ec92020ab8dddb150c39139dbfd3c.jpg",
            "https://carmenarabelabp.files.wordpress.com/2011/06/17_estrela_tarot_wicca.jpg?w=640",
            "https://i.pinimg.com/originals/b4/bf/46/b4bf4620156da1d3575d4b4750c43767.jpg",
            "https://cdn.astrocentro.com.br/blog/wp-content/uploads/2013/12/15195318/o-sol-tarot-mitologica.jpg",
            "https://lh3.googleusercontent.com/proxy/IYTeB9N_ILrHiIyEFFpW-RMoARz70PCPlZixfWPJndRfFS1Zofq9K5oL_jjvS7w5zo-istT66RK5E1HqjDjMT2kEYu8zaSMgyEmwuAo48BhW-TCv",
            "https://lh3.googleusercontent.com/proxy/syDhfapxYAHQLkE3UMKr5bomsDy7pHizZzYp2bHFTRoaUDKgASvVIrXPL7mYiN2zyZpAC77PP-KHtQEmdv0RGYX_Fp1VadpJSc7oxCVAXu9ypJMB"
        ]
        this.arrayTeste =[];
    }

    addEvent(){
        this.button.addEventListener("click", ()=>{
            this.showArray()
        })
    }

    showArray(event){        
       
        let numeroRandomico = Math.floor(Math.random() * 21 )        
        
        //LIMITADOR DE 3 IMAGENS
        const img = document.getElementsByTagName('img');     
        let res = this.arrayTeste.indexOf(numeroRandomico)
        if(res==-1 && img.length<=3)
        {   this.arrayTeste.push(numeroRandomico)
            this.container.innerHTML +=`<img src=${this.imagens[numeroRandomico]} alt=${numeroRandomico}/>`
        }
        
      
        if(img.length > 3){
        this.container.innerHTML="" 
        this.arrayTeste = []
        }
    }
  
    init(){
       this.addEvent()
    }
}





         
      
          
       
       
          
    
       
        





