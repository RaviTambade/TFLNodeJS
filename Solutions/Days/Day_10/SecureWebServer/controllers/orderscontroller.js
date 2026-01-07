exports.getOrders = (req, res) => {

    console.log("decoded user:", req.user);

    // Authorization rule
    if (req.user.email !== "ravi.tambade@transflower.in") {
        return res.status(403).send("Forbidden: Access denied");
    }

    const orders = [
        { orderid: 543, date: "30/9/2022", total: 6000, status: "intransit" },
        { orderid: 544, date: "21/9/2022", total: 67500, status: "processed" },
        { orderid: 545, date: "17/9/2022", total: 23000, status: "processed" },
        { orderid: 546, date: "3/8/2022", total: 65000, status: "processed" },
        { orderid: 547, date: "12/7/2022", total: 2200, status: "processed" },
        { orderid: 548, date: "26/12/2022", total: 16000, status: "processed" }
    ];

    res.status(200).json(orders);
};
