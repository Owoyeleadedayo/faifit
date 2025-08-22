declare module "react-responsive-masonry" {
    import * as React from "react";
  
    export interface ResponsiveMasonryProps {
      columnsCountBreakPoints: { [key: number]: number };
      gutterBreakpoints?: { [key: number]: string };
      children: React.ReactNode;
    }
  
    export interface MasonryProps {
      gutter?: string;
      columnsCount?: number;
      children: React.ReactNode;
    }
  
    export const ResponsiveMasonry: React.FC<ResponsiveMasonryProps>;
    const Masonry: React.FC<MasonryProps>;
  
    export default Masonry;
  }
  