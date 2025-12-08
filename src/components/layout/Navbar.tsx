import { useGetCategoriesQuery } from "@/api/categoryApi";
import { ChevronDownIcon, SearchIcon} from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../ui/input-group";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Logo from "@/assets/app_logo.png"
import NavActions from "./NavActions";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Category } from "@/types/category";

const Navbar = () => {
  
  const [searchInputText, setSearchInputText] = useState<string | undefined>("");

  const {data} = useGetCategoriesQuery();
  const allCategoryObject = {
    slug: "all",
    name: "All Categories"
  }
  const [categorySelected, setCategorySelected] = useState<Category | null>(allCategoryObject)
  const categories = data ? [allCategoryObject, ...data] : [allCategoryObject];
  const navigate = useNavigate();

  const searchProducts = () => {
    if(categorySelected?.slug !== "all"){
      navigate(`/products/${categorySelected?.slug}/${searchInputText}`)
      setCategorySelected(allCategoryObject);
      setSearchInputText("");
    } else {
      navigate(`/products/${searchInputText}`)
      setCategorySelected(allCategoryObject);
      setSearchInputText("");
    }
      
  }

  return (
    <header className="sticky top-0 z-40 bg-background border-b">
      <div className="max-w-6xl mx-auto h-16 px-3 sm:px-4 flex items-center justify-between gap-3">
        <div className="flex items-center shrink-0 text-xl font-semibold gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="MiniShop Logo" className="h-12 w-auto object-contain "/>
            <span className="font-semibold text-lg ml-2 hidden sm:block">MiniShop</span>
          </Link>
        </div>
        <div className="flex-1 min-w-0 px-2">
          <InputGroup>
            <InputGroupAddon className="hidden md:flex">
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <InputGroupButton className="pr-1.5! text-sm focus:outline-none focus:ring-0 focus-visible:ring-0" variant="ghost">
                    {categorySelected?.name} <ChevronDownIcon className="size-4 ml-1" />
                  </InputGroupButton>
                </DropdownMenuTrigger> 
                <DropdownMenuContent align="start" className="[--radius:0.95rem] w-40 max-h-60 overflow-y-auto 
                    data-[side=bottom]:animate-slide-down-fade
                    data-[side=top]:animate-slide-up-fade">
                  {categories.map((category) => (
                      <DropdownMenuItem className="cursor-pointer" key={category.slug}
                      onSelect={() => setCategorySelected(category)}>
                        {category.name}
                      </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>                              
              </DropdownMenu>
            </InputGroupAddon>             
            <InputGroupInput placeholder="Search products" value={searchInputText}
            className="focus-within:ring-2 ring-primary/40" 
            onChange={(e) => setSearchInputText(e.target.value)}
            onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          searchProducts();
                        }
                      }}/>
            <InputGroupAddon align="inline-end">
              <SearchIcon className="cursor-pointer size-5"onClick={searchProducts}/>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <NavActions orientation="horizontal" />
        </div>        
      </div>
    </header>
  )
}

export default Navbar
