const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // Şifre sadece kayıt tamamlandığında eklenir
  otp: { type: String, required: false }, // OTP doğrulama için
});

module.exports = mongoose.model('User', userSchema);
