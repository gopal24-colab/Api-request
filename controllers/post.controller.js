const handlePostRequest = (req, res) => {
  const array = req.body?.data;
  const response = {
    is_success: true,
    user_id: "gopal_sasmal_25032001",
    email: "gopal1152.be20@chitkarauniversity.edu.in",
    roll_number: 2011981152,
    numbers: [],
    alphabets: [],
  };
  array.forEach((ele) => {
    if (isNaN(ele)) {
      response.alphabets.push(ele);
    } else {
      response.numbers.push(ele);
    }
  });

  res.status(200).json(response);
};

module.exports = { handlePostRequest };
