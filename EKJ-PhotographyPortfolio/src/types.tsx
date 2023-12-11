interface BlogPost {
  id: number;
  title: string;
  image: string;
  description: string;
  content: string;
  modifieddate: string;
  modifiedBy: string;
  labels: string[];
}

export default BlogPost;
