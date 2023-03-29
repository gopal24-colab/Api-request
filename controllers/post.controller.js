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
  array?.forEach((item) => {
    let num = parseInt(item);
    if (num) {
      if(num%2==0)
        responseObj.even_numbers.push(num);
      else
        responseObj.odd_numbers.push(num);
    }
    else responseObj.alphabets.push(item.toUpperCase());
  });
  res.json(responseObj)

  res.status(200).json(response);
};

module.exports = { handlePostRequest };
