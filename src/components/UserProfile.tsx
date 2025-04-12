import React from 'react';
import useStore from '../globalState';

const UserProfile = () => {
  const { name, setName } = useStore();
  const [inputName, setInputName] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName(inputName);
    setInputName('');
  };

  return (
    <div style={{ padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h3>当前用户：{name || '未设置'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="输入新名字"
          style={{ marginRight: 10, padding: 5 }}
        />
        <button type="submit" style={{ padding: '5px 15px' }}>
          更新名字
        </button>
      </form>
    </div>
  );
};

export default UserProfile;