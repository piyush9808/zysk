import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface BlogPost {
  image: string;
  category: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    category: "Design",
    title: "UX review presentations",
    description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: {
      name: "Olivia Rhye",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    date: "20 Jan 2024"
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    category: "Product",
    title: "Migrating to Linear 101",
    description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: {
      name: "Phoenix Baker",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    date: "19 Jan 2024"
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    category: "Software Engineering",
    title: "Building your API stack",
    description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: {
      name: "Lana Steiner",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    date: "18 Jan 2024"
  }
];

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="flex flex-col">
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <span className="text-sm font-medium text-purple-600 mb-2">{post.category}</span>
    <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
      {post.title}
      <ArrowUpRight className="ml-2 h-4 w-4" />
    </h3>
    <p className="text-gray-600 mb-4">{post.description}</p>
    <div className="flex items-center mt-auto">
      <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full mr-2" />
      <div>
        <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
        <p className="text-sm text-gray-500">{post.date}</p>
      </div>
    </div>
  </div>
);

const LatestBlogPosts: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Our blog</h2>
            <h3 className="mt-2 text-3xl font-medium text-gray-900 sm:text-4xl">Latest blog posts</h3>
            <p className="mt-4 text-lg text-gray-500">
              Tools and strategies modern teams need to help their companies grow.
            </p>
          </div>
          <button className="hidden sm:block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
            View all posts
          </button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
            View all posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;