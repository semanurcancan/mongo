import express from "express";
import mongoose from "mongoose";
//bütün işlemler aşağıda oluşan model üzerinden gercekleşecek.!!!
import Post from "../db/posts.js";

const router = express.Router()
//localHost:5000 e  get isteği yapılırsa dataBase deki bütün postları cekecegım anlamına gelir.


//get oluşturma.bütün postları getirir.
router.get('/', async(req,res) => {
try {
    //pos.find()=> benim modleimi alıp bütün dataları bana dödürüyor.!!!
    const allPosts = await Post.find()
    res.json(allPosts)
    
} catch (error) {
    console.log(error)
}
})


//tek bir post için yapılacak istek. sadece cekmek ıstediğim tek post için.belirli id ye sahip postu getirir.
//params => kullanıcıya atanmış id
router.get('/:id', async(req,res) => {
    try {
      const {id} = req.params
    const post = await Post.findById(id)
    if(!post)return
    res.status(200).json(post)  
    } catch (error) {
        console.log(error)
    }
    
})


//post/gönderi oluşturma..//req.body oluşturacagımız post'un bilgileri.
router.post('/', async(req,res) => {
    try {
        const post =  req.body
   const createdPost = await Post.create(post)
   res.status(201).json(createdPost)
    } catch (error) {
        console.log(error)
    }

})
   

//gönderiyi güncelleme update isteği.belirli bir post UPDATE edileceği için /:id kullanıldı path de.!!
router.put('/:id', async(req,res) => {
    try {
        const {id} = req.params
        const {title, content, creator} = req.body
        //önce id kontolü.yani bana verilen id data'daki hiç bir id ile eşleşmiyorsa.
        if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('post bulunamadi')
        //id eşleşti ise;
        const updatedPost = {title, content, creator, id_:id}
        //new:true yapılır. çünkü update gercekleştikten sonra göreceğim post benim güncellenmiş postumdur.(bunu yapmazsam update de sıkıtı yaşarım. güncel halini göremem.)
        await Post.findByIdAndUpdate(id, updatedPost, {new:true})
        res.json(updatedPost)


    } catch (error) {
        console.log(error)
    }
})



//silme işlemleri için çağırılır. belirli bir post silineceği için dinamik olarak path da id çağırılır.
router.delete('/:id', async(req,res) => {
    try {
        const {id} = req.params
        await Post.findByIdAndRemove(id)
        res.json({message:'post silindi!!!'})
    } catch (error) {
        console.log(error)
    }
})


//hersey bitti frontend geçiypruz.VUe.Js
export default router