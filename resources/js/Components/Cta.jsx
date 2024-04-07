import { Link } from '@inertiajs/react';
import { Button } from './ui/button';


const Cta = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-8'>
          Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
          </h2>
          <Link href='/contact'>
            <Button>
              Let's do this
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
