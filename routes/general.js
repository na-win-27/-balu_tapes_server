import express from "express";
import {
  getElastic,
  getRawReq,
  getShiftByJob,
  getShift,
  postShift,
  postCustomer,
  postElastic,
  postOrder,
  postRawMaterial,
  getRawMaterials,
  getRawMaterialById,
  getJobOrderById,
  putRawMaterialById,
  deleteRawMaterialById,
  getCustomerById,
  getCustomer,
  putCustomerById,
  deleteCustomerById,
  postEmployees,
  getEmployees,
  postMachine,
  getMachines,
  getOrders,
  getOrderById,
  postRawMaterialApproved,
  getJobOrders
} from "../controllers/general.js";

const router = express.Router();

/*----------------------------------------------------------------RAW MATERIAL----------------------------------------------------------------*/

router.get("/rawMaterial", getRawMaterialById);
router.get("/rawMaterials", getRawMaterials);
router.post("/rawMaterials", postRawMaterial);
router.put("/rawMaterial", putRawMaterialById);
router.delete("/rawMaterial", deleteRawMaterialById);

/*----------------------------------------------------------------Customer----------------------------------------------------------------*/

router.get("/customer/:id", getCustomerById);
router.get("/customers", getCustomer);
router.post("/customer", postCustomer);
router.put("/customer/:id", putCustomerById);
router.delete("/customer/:id", deleteCustomerById);

/*----------------------------------------------------------------Elastic----------------------------------------------------------------*/
router.get("/elastic", getElastic);
router.post("/elastic", postElastic);

/*----------------------------------------------------------------Machine----------------------------------------------------------------*/
router.post("/machine", postMachine);
router.get("/machines", getMachines);

/*----------------------------------------------------------------Employee----------------------------------------------------------------*/
router.post("/employee", postEmployees);
router.get("/employees", getEmployees);

router.post("/orders", postOrder);
router.get("/orders", getOrders);
router.get("/order", getOrderById);
router.get("/jobOrders", getJobOrders);
router.get("/jobOrder", getJobOrderById);

router.post("/rawMatRequired",getRawReq);
router.post("/rawMaterialApproved",postRawMaterialApproved);

router.get("/shift", getShiftByJob);
router.post("/shifts",postShift);
router.get("/shiftDetail",getShift);
export default router;
