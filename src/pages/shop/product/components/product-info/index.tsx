import { StarRating } from "@/components/star-rating"
import { Button } from "@/components/ui/button"
import React from "react"
import { Increment } from "@/components/increment"
import { Favorite } from "../favorite"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export const ProductInfo: React.FC = function () {
  return (
    <div className="w-[1140px] flex flex-col items-start">
      <Navigation />
      <div className="w-full flex flex-row justify-between mt-4">
        <img
          src=""
          alt=""
          className="w-[555px] h-[555px] bg-cover bg-zinc-500"
        />
        <div className="w-[545px] h-[555px] flex flex-col items-start justify-center">
          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-2xl font-bold">Lorem ipsum</h1>
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-600 rounded-md"
            >
              No estoque
            </Badge>
          </div>
          <h6 className="text-xl mt-2">Lorem ipsum dollar amset</h6>
          <div className="flex flex-row mt-2">
            <StarRating rating={5} totalStars={5} />
            <span className="text-zinc-500 ml-2">5.0 (120 visualizações)</span>
          </div>
          <div className="mt-2">
            <span className="text-lg font-normal">R$ 80,00</span>
            <span className="ml-2 line-through text-zinc-500 text-lg">
              R$ 200,00
            </span>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            nesciunt maxime tempore sapiente. Labore eum tempore explicabo,
            officiis sed eos. Nam quas ducimus nostrum odit repellendus eum
            laboriosam inventore tenetur.
          </p>
          <div className="mt-4">
            <strong>Cor</strong>
            <div className="flex flex-row gap-x-[10px] mt-2">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <div
                    key={index}
                    className="w-[36px] h-[36px] bg-zinc-400 rounded"
                  ></div>
                )
              })}
            </div>
          </div>
          <div className="mt-4">
            <strong>Tamanho</strong>
            <div className="flex flex-row gap-x-[10px] mt-2">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <div
                    key={index}
                    className="w-[36px] h-[36px] bg-zinc-400 rounded"
                  ></div>
                )
              })}
            </div>
          </div>
          <div className="flex w-full gap-[20px] mt-11">
            <Increment />
            <Button className="p-6 w-[339px] bg-zinc-950">
              Adicionar no carrinho
            </Button>
            <Favorite />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-start flex-row gap-x-[20px] mt-4">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <img
              key={index}
              src=""
              alt=""
              className="w-[125px] h-[125px] bg-zinc-500"
            />
          )
        })}
      </div>

      <Tabs defaultValue="descriptions" className="w-full m-0 p-0 mt-7">
        <TabsList className="m-0 p-0 bg-transparent border-b-[1px] rounded-none w-full flex flex-row justify-start gap-6 mb-3">
          <TabsTrigger value="descriptions" className="p-0 m-0 visited:text-foreground disabled:text-muted-foreground text-lg focus:border-b-[3px] focus:border-b-zinc-900 rounded-none h-full focus:h-[43px]">Descrição</TabsTrigger>
          <TabsTrigger value="additionalInformation" className="p-0 m-0 visited:text-foreground disabled:text-muted-foreground text-lg focus:border-b-[3px] focus:border-b-zinc-900 rounded-none h-full focus:h-[43px]">Informações Adicionais</TabsTrigger>
          <TabsTrigger value="review" className="p-0 m-0 visited:text-foreground disabled:text-muted-foreground text-lg focus:border-b-[3px] focus:border-b-zinc-900 rounded-none h-full focus:h-[43px]">Reviews</TabsTrigger>
          <TabsTrigger value="comment" className="p-0 m-0 visited:text-foreground disabled:text-muted-foreground text-lg focus:border-b-[3px] focus:border-b-zinc-900 rounded-none h-full focus:h-[43px]">Comentar</TabsTrigger>
        </TabsList>
        <TabsContent value="descriptions" className="m-0 p-0">
          <div className="border-b-zinc-100 border-b-[2px] pb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quo cumque odit, nobis amet ab voluptatibus quas, animi expedita laborum modi atque laudantium sapiente. Itaque perferendis optio placeat est repudiandae.
          </div>
        </TabsContent>
        <TabsContent value="additionalInformation" className="m-0 p-0">
          <div className="border-b-zinc-100 border-b-[2px] pb-4">
            <div className="flex flex-row gap-5">
              <strong>Cor</strong>
              <p>Red, Green, Orange</p>
            </div>
            <div className="flex flex-row gap-5 mt-2">
              <strong>Size</strong>
              <p>S, M, L, XL, XXL</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="review">
          <div className="mt-5">
            <strong className="">Comentários dos consumidores</strong>
            <div className="mt-2">
              {
                Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <div key={index} className="border-b-[1px] border-b-zinc-200 py-4">
                        <div className="flex flex-row gap-4 mb-3">
                          <img src="" alt="" className="w-[50px] h-[50px]"/>
                          <div className="flex flex-col">
                            <p>John Doe</p>
                            <StarRating rating={5} totalStars={5}/>
                          </div>
                        </div>
      
                      <strong>Commento titulum</strong>
      
                      <p className="mb-3 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt possimus eius nulla harum tempore facilis voluptas et ipsa animi beatae! Repellat iste expedita sapiente, nihil laborum fugit eveniet esse harum.</p>
      
                      <span className="text-zinc-400">Posted on Jone 05, 2023</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </TabsContent>
        <TabsContent value="comment">
          <div className="mt-5">
              <strong>Adicionar seu comentário</strong>
              <form action="" className="mt-6">
                <div className="">
                  <Label>Sua nota</Label>
                  <RadioGroup defaultValue="option-one" className="flex flex-row mt-1">
                    <div className="flex items-center">
                      <RadioGroupItem value="1" id="1" className="bg-transparent border-none w-0 h-0"/>
                      <Label htmlFor="1">
                        <StarRating disabledColorStars="text-zinc-200" colorStars="text-yellow-500" rating={0} totalStars={1}/>
                      </Label>
                    </div>
                    <Separator orientation="vertical" className="h-6 bg-zinc-200" />
                    <div className="flex items-center">
                      <RadioGroupItem value="2" id="2" className="bg-transparent border-none w-0 h-0"/>
                      <Label htmlFor="2">
                        <StarRating disabledColorStars="text-zinc-200" colorStars="text-yellow-500" rating={0} totalStars={2}/>
                      </Label>
                    </div>
                    <Separator orientation="vertical" className="h-6 bg-zinc-200" />
                    <div className="flex items-center">
                      <RadioGroupItem value="3" id="3" className="bg-transparent border-none w-0 h-0"/>
                      <Label htmlFor="3">
                        <StarRating disabledColorStars="text-zinc-200" colorStars="text-yellow-500" rating={0} totalStars={3}/>
                      </Label>
                    </div>
                    <Separator orientation="vertical" className="h-6 bg-zinc-200" />
                    <div className="flex items-center">
                      <RadioGroupItem value="4" id="4" className="bg-transparent border-none w-0 h-0"/>
                      <Label htmlFor="4">
                        <StarRating disabledColorStars="text-zinc-200" colorStars="text-yellow-500" rating={0} totalStars={4}/>
                      </Label>
                    </div>
                    <Separator orientation="vertical" className="h-6 bg-zinc-200" />
                    <div className="flex items-center">
                      <RadioGroupItem value="5" id="5" className="bg-transparent border-none w-0 h-0"/>
                      <Label htmlFor="5">
                        <StarRating disabledColorStars="text-zinc-200" colorStars="text-yellow-500" rating={0} totalStars={5}/>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="my-4">
                  <Label htmlFor="name">Seu nome</Label>
                  <Input id="name" name='name' className="mt-1"/>
                </div>
                <div className="">
                  <Label htmlFor="email">Seu e-mail</Label>
                  <Input id="email" name='email' className="mt-1"/>
                </div>
                <div className="my-4">
                  <Label htmlFor="comment">Seu comentário</Label>
                  <Textarea id="comment" name='comment' className="mt-1"/>
                </div>
                <Button>Enviar</Button>
              </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
