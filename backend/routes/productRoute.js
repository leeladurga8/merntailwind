import express from 'express'
import  {listProducts,addProduct,removeProduct,singleProduct} from '../controllers/ProductController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';


const productRouter = express.Router();

    productRouter.post("/upload", upload.array("images",5), (req, res) => {
     console.log(req.file); 
     
   })

productRouter.post('/add', adminAuth, upload.fields([{name:'image1'},{name:'image2'},{name:'image3'},{name:'image4'}]),addProduct);
 productRouter.post('/add-product', adminAuth, upload.single('image1'), addProduct);

 productRouter.post('/remove',adminAuth,removeProduct);
 productRouter.post('/single',singleProduct);
 productRouter.get('/list',listProducts);

export default productRouter;
