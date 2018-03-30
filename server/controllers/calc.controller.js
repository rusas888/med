
function sum(req, res) {
    const _sum = req.body.n1*1 + req.body.n2*1;
  	res.send({answer: 'SUM OF ' + req.body.n1 + ' and ' + req.body.n2 + ' EQUALS TO ' +_sum}).end();

}

module.exports = {
   sum
}