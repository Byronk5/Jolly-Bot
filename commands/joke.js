const jokeReply = [
  "https://static.wixstatic.com/media/53e57b_b8a1085106254d09890db35892a125a3~mv2.png/v1/fill/w_469,h_506,al_c,lg_1,q_85/Screenshot_2020-07-20%20Which%20movies%20are%20t.webp",
  "https://www.memesmonkey.com/images/memesmonkey/c1/c1af634b81aa4e858cdb3f560b1e81a8.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtf3TTuR3O_lSAKbw-dDPqT0n_jKvIO9ikbQ&usqp=CAU",
];

module.exports = function (message) {
  const randomJoke = Math.floor(Math.random() * jokeReply.length);
  message.reply(jokeReply[randomJoke]);
};
