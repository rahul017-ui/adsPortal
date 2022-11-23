const router=require("express").Router();

const companyContoller=require("../controller/ads")

router.get('/search/:key',companyContoller.searchCompany);
router.get('/allcompanies',companyContoller.getAllCompanies)


module.exports=router;