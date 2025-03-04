import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          About Our 
          <span className="text-green-700 ml-2">Journey</span>
          
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-l text-muted-foreground">
          Discover the story behind our passion for innovation and commitment to excellence. 
          We&apos;re on a mission to transform the digital landscape, one project at a time.
        </p>
        <div className="mt-10 flex justify-center gap-4 ">
          <Button className="bg-green-700 hover:bg-green-600 size-lg" >Our Mission</Button>
          <Button size="lg" variant="outline">
            Meet the Team
          </Button>
        </div>
      </div>
    </div>
  );
}
