const handlePostRequest = (req, res) => {
  const array = req?.body?.data;
  const response = {
    is_success: true,
    user_id: "gopal_sasmal_25032001",
    email: "gopal1152.be20@chitkarauniversity.edu.in",
    roll_number: 2011981152,
    odd_numbers: [],
    even_numbers: [],
    alphabets: [],
  };
  array?.forEach((ele) => {
    ele = parseInt(ele);
    if (!ele) {
      response.alphabets.push(ele.toUpperCase());
    } else {
      if (ele % 2 == 0) {
        response.even_numbers.push(ele);
      } else {
        response.odd_numbers.push(ele);
      }
    }
  });

  res.status(200).json(response);
};

module.exports = { handlePostRequest };
