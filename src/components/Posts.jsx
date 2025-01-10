import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';

const posts = [
  {
    id: 1,
    type: 'all',
    image: 'https://picsum.photos/800/600?random=1',
    title: 'Post Title 1',
    owner: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/40?img=1'
    },
    views: 1234
  },
  {
    id: 2,
    type: 'article',
    image: 'https://picsum.photos/800/600?random=2',
    title: 'Article Title',
    owner: {
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/40?img=2'
    },
    views: 567
  },
  {
    id: 3,
    type: 'event',
    image: 'https://picsum.photos/800/600?random=3',
    title: 'Event Title',
    owner: {
      name: 'Mike Johnson',
      avatar: 'https://i.pravatar.cc/40?img=3'
    },
    views: 890
  }
];

function Posts() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = ['All Posts', 'Article', 'Event', 'Education', 'Job'];

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleShare = () => {
    alert('Share functionality to be implemented');
  };

  const filteredPosts = posts.filter(post => {
    if (currentTab === 0) return true;
    return post.type.toLowerCase() === tabs[currentTab].toLowerCase();
  });

  return (
    <div className="md:m-4 w-full md:w-[60rem] h-full">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={currentTab} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab} />
          ))}
        </Tabs>
      </Box>

      <div className="space-y-6 max-h-[calc(100vh-200px)]">
        {filteredPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[70vh] object-cover"
              loading="lazy"
            />
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src={post.owner.avatar} 
                  alt={post.owner.name}
                  className="w-10 h-10 rounded-full"
                  loading="lazy"
                />
                <span className="font-medium">{post.owner.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <VisibilityIcon className="text-gray-500" />
                  <span className="text-gray-500">{post.views}</span>
                </div>
                <button 
                  onClick={handleShare}
                  className="flex items-center space-x-1 text-blue-500 hover:text-blue-600"
                >
                  <ShareIcon />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;