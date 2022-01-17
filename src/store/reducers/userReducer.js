const INITIAL_STATE = {
  user: {
    name: 'Osher Cappelli',
    email: 'caposher@gmail.com',
    phonePre: '+972',
    phoneNumber: '546960645',
    imgUrl: 'osher-cappelli.png',
    jobTitle: 'Developer',
    company: 'Purple',
    about:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, omnis dolorem. Maiores, reprehenderit dolorum? Quo corporis quasi aspernatur optio eveniet praesentium sit modi commodi dolor ipsa. Esse ex eaque rerum excepturi explicabo fuga dolores aut alias velit, vero quod quam voluptas possimus laboriosam accusantium neque suscipit quidem, sapiente consequatur perferendis in reiciendis. Quaerat quas maxime esse blanditiis unde, iure veritatis repellat culpa molestiae enim ex totam consectetur nostrum sapiente voluptatem ipsa itaque, debitis accusantium vitae. Quisquam voluptate, repudiandae enim at deleniti minima. Commodi earum error incidunt debitis optio!',
  },
};

export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, user: action.user };
    default:
      return state;
  }
}
