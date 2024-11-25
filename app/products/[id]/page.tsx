"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getProductById } from "../../../data/products";
import { notFound, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { Product } from "../../../data/products";

interface Props {
  params: {
    id: string;
  };
}

const ProductPage = ({ params }: Props) => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedFinish, setSelectedFinish] = useState("");
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProduct = () => {
      const foundProduct = getProductById(params.id);
      if (!foundProduct) {
        notFound();
        return;
      }
      setProduct(foundProduct);
      if (foundProduct.finishes && foundProduct.finishes.length > 0) {
        setSelectedFinish(foundProduct.finishes[0].name);
      }
      setIsLoading(false);
    };

    loadProduct();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="w-32 h-32 rounded-full border-t-2 border-b-2 border-blue-500 animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return notFound();
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmitQuote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const quoteData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      product: product.name,
      finish: selectedFinish
    };

    // Add your form submission logic here
    console.log('Quote requested:', quoteData);
    setIsQuoteDialogOpen(false);
  };

  return (
    <section className="flex relative flex-col min-h-screen bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br to-transparent rounded-full blur-3xl from-blue-600/30" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl to-transparent rounded-full blur-3xl from-blue-600/30" />
      </div>

      <div className="container relative flex-grow px-4 pt-32 pb-20 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col gap-12 -mx-4 md:flex-row"
        >
          {/* Image and Actions */}
          <motion.div 
            className="px-4 md:flex-1"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden relative p-2 bg-gradient-to-b rounded-2xl from-blue-500/20 to-blue-600/20">
              <div className="relative h-[460px] rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            
            <motion.div 
              className="flex gap-4 mt-6"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Dialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="flex-1 px-8 py-6 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700">
                    Request a Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-gray-900 border border-gray-800 shadow-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">
                      Request a Quote for {product.name}
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Please fill out the form below to request a quote.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmitQuote} className="grid gap-6 py-4">
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <Label htmlFor="name" className="text-right text-gray-300">
                        Name
                      </Label>
                      <input
                        required
                        id="name"
                        name="name"
                        className="col-span-3 p-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <Label htmlFor="email" className="text-right text-gray-300">
                        Email
                      </Label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        className="col-span-3 p-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <Label htmlFor="phone" className="text-right text-gray-300">
                        Phone
                      </Label>
                      <input
                        required
                        id="phone"
                        name="phone"
                        type="tel"
                        className="col-span-3 p-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-center">
                      <Label htmlFor="message" className="text-right text-gray-300">
                        Message
                      </Label>
                      <textarea
                        required
                        id="message"
                        name="message"
                        rows={4}
                        className="col-span-3 p-2 text-white bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-blue-500 min-h-[100px] resize-y"
                        placeholder="Your Message"
                        defaultValue={`I'm interested in ${product.name}${selectedFinish ? ` with ${selectedFinish} finish` : ''}.`}
                      />
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="px-4 py-2 w-full font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
                        Submit Request
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              <Button 
                variant="outline"
                className="flex-1 px-8 py-6 text-lg font-semibold text-blue-400 border-blue-500 hover:bg-blue-500/10"
                onClick={() => window.location.href = 'tel:+919156807121'}
              >
                <span className="flex items-center">
                  Contact Us
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            className="px-4 md:flex-1"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative p-px bg-gradient-to-b rounded-2xl from-blue-500/20 to-blue-600/20">
              <div className="p-8 rounded-2xl backdrop-blur-sm bg-gray-800/50">
                <motion.h1 
                  className="mb-2 text-base font-semibold tracking-wide text-blue-400 uppercase"
                  variants={fadeInUp}
                >
                  Product Details
                </motion.h1>
                <motion.h2 
                  className="mb-4 text-4xl font-bold text-white"
                  variants={fadeInUp}
                >
                  {product.name}
                </motion.h2>
                <motion.p 
                  className="mb-6 text-lg leading-relaxed text-gray-300"
                  variants={fadeInUp}
                >
                  {product.description}
                </motion.p>

                <motion.div 
                  className="grid grid-cols-2 gap-6 p-6 mb-6 rounded-xl bg-gray-800/50"
                  variants={fadeInUp}
                >
                  <div>
                    <span className="text-sm font-medium text-gray-400">Price</span>
                    <p className="mt-1 text-2xl font-semibold text-white">{product.price}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-400">Availability</span>
                    <p className="mt-1 text-2xl font-semibold text-white">{product.availability}</p>
                  </div>
                </motion.div>

                {product.finishes && product.finishes.length > 0 && (
                  <motion.div 
                    className="mb-6"
                    variants={fadeInUp}
                  >
                    <span className="text-sm font-medium text-gray-400">Select Finish</span>
                    <div className="flex flex-wrap gap-3 mt-3">
                      {product.finishes.map((finish) => (
                        <button
                          key={finish.name}
                          onClick={() => setSelectedFinish(finish.name)}
                          className={`relative p-1 rounded-full transition-all duration-300 ${
                            selectedFinish === finish.name 
                              ? 'scale-110 ring-2 ring-blue-500 transform' 
                              : 'hover:scale-105'
                          }`}
                        >
                          <span
                            className={`block w-8 h-8 rounded-full ${finish.color} shadow-lg`}
                            aria-label={finish.name}
                          />
                          <span className="sr-only">{finish.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <motion.div 
                  className="mt-8"
                  variants={fadeInUp}
                >
                  <span className="text-sm font-medium text-gray-400">Product Description</span>
                  <p className="mt-2 text-base text-gray-300">
                    {product.details}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPage;
