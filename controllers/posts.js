const Data = require('../models/data');
exports.getPosts = (req, res, next) => {
  const { searchTerm } = req.body;
  const {searchLimit} = req.body
  let {sortBy} = req.body
  if(!sortBy){
    sortBy = 'relevance'
  }
  const data = new Data(searchTerm, sortBy,searchLimit);
  data.getData().then(data => {
    res.render('posts', {
        posts:data.data.children,
        path: '/posts',
        title: 'Posts'
      });
  });
  
};

