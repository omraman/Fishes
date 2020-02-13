const express = require("express");
const router = express.Router();
const db = require("../db/index");


router.get('/list', async (req, res, next) =>{
    try{
        const results = await db.query("SELECT * from fishes");
        console.table(results.rows)
        return res.json(results.rows);
    }catch(err){
        return next(err);
    }
});

router.post("/create", async (req, res, next) => {
    try{
        const result = await db.query(
                "INSERT INTO fishes (name, type) VALUES ($1, $2) RETURNING *", [req.body.name, req.body.type
            ]);
        return res.json(result.rows[0]);
    }catch(err){
        return next(err);
    }
});

router.patch("/update/:id", async (req, res, next) => {
    try{
        console.log(req.params);
        const result = await db.query(
            "UPDATE fishes SET name=$1, type=$2 WHERE id=$3 RETURNING *",
            [req.body.name, req.body.type, req.params.id]
        );
        return res.json({ message: "Updated" });
    } catch(err){
        console.log(err);
        return next(err);
    }
});

router.delete("/delete/:id", async (req, res, next) => {
    try{
        const result = await db.query(
            "DELETE FROM fishes where id=$1", [req.params.id]
        );
        return res.json({ message: "Deleted" });  
    }
    catch(err){
        console.log(err)
        return next (err);
    }
})

module.exports = router;