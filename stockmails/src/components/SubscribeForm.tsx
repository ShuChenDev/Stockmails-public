"use client"

import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"



export default function SubscribeForm() {

  const sectors = [
    {
      sector: "Energy",
      key: "energy"
    },
    {
      sector: "Materials",
      key: "materials"
    },
    {
      sector: "Industrials",
      key: "industrial"
    },
    {
      sector: "Consumer Discretionary",
      key: "discretionary"
    },
    {
      sector: "Consumer Staples",
      key: "staples"
    },
    {
      sector: "Health Care",
      key: "health"
    },
    {
      sector: "Financials",
      key: "financials"
    },
    {
      sector: "Information Technology",
      key: "it"
    },
    {
      sector: "Communication Services",
      key: "communication"
    },
    {
      sector: "Utilities",
      key: "utility"
    },
    {
      sector: "Real Estate",
      key: "realEstate"
    },
  ]


  const macros = [
    {
      section: "Monetary Policy",
      hint: "Central bank actions, rate decisions, QE/QT, Fed, ECB, BOJ.",
      key: "monetary",
    },
    {
      section: "Fiscal Policy",
      hint: "Government spending, taxation, budgetary policy, debt issuance, Congress, Treasury, or EU governments.",
      key: "fiscal",
    },
    {
      section: "Inflation & Growth",
      hint: "CPI, PPI, GDP, Unemployment, Labor Participation.",
      key: "inflation",
    },
    {
      section: "Trade & Global Macro",
      hint: "International Trade, Commodity, Supply Chain, Tariffs, Global Demand",
      key: "trade",
    },
    {
      section: "Geopolitics",
      hint: "Elections, Wars, Sanctions, Regulation, Geopolitical Tension.",
      key: "geopolitics",
    },
  ]

  const tickers = [
    {
      ticker: "S&P 500",
      hint: "SPDR S&P 500 Trust",
      key: "sp500",
    },
    {
      ticker: "Nasdaq 100",
      hint: "Invesco QQQ Trust",
      key: "qqq",
    },
    {
      ticker: "Dow Jones Industrial..",
      hint: "Dow Jones Industrial Average Index",
      key: "dji",
    },
    {
      ticker: "AAPL",
      hint: "Apple",
      key: "aapl",
    },
    {
      ticker: "TSLA",
      hint: "Tesla",
      key: "tsla",
    },
    {
      ticker: "Bitcoin",
      hint: "Bitcoin",
      key: "btc",
    },
  ]


  const [email, setEmail] = useState("");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);


  const handleCheckboxChange = (id: string, checked: boolean) => {
    console.log(id, checked)

    if (checked) {
      setCheckedItems([...checkedItems, id]);
    }
    else {
      setCheckedItems(checkedItems.filter(item => item !== id));
    }
  }

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }
    setError(null)

    const body = {
      email,
      services: checkedItems.join("&"),
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        setSuccess(true)   // ✅ show success state
      } else {
        setError("Subscription failed. Please try again.")
      }
    } catch {
      setError("Failed to subscribe. Please try again.")
    }
  }


  const allKeys = [...sectors.map(s => s.key), ...macros.map(m => m.key), ...tickers.map(t => t.key)]
  const isAllSelected = checkedItems.length === allKeys.length

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setCheckedItems(allKeys)
    } else {
      setCheckedItems([])
    }
  }


  const [error, setError] = useState<string | null>(null)
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const [success, setSuccess] = useState(false)

  return (


    <>
      {success ? (
        <div className="flex flex-col items-center justify-center p-6 bg-green-100 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700">🎉 Subscription Successful!</h2>
          <p className="text-green-600 mt-2">Thank you for subscribing. Check your email for today{"'"}s newspaper.</p>
        </div>
      ) : (
        <div>
          {/*Email & Submit Section*/}
          <div className=" flex flex-col w-full gap-3  ">
            <div className="w-full ">
              <div className="flex-1 flex gap-2 m-2 w-full">
                <Input type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="flex-1 w-full" />
                <Button onClick={handleSubmit} variant="outline" className="text-black">
                  Subscribe
                </Button>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm m-2">{error}</p>
            )}

            {/*Select All*/}
            <div>
              <div className="flex m-2 gap-2">
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={(checked) => handleSelectAll(!!checked)}
                />
                <Label>Select All</Label>
              </div>
            </div>
            {/*Macro Section*/}
            <div className="w-full">
              <div className="flex flex-col gap-2 m-2">
                <Label>Macroeconomical News</Label>
                <div className="grid grid-cols-3 gap-2 m-2">
                  {macros.map((sector, index) => (
                    <div key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex m-2 gap-2">
                            <Checkbox
                              checked={checkedItems.includes(sector.key)}
                              onCheckedChange={(checked) => handleCheckboxChange(sector.key, !!checked)}
                              id={sector.key}
                            />
                            <Label htmlFor={sector.key}>{sector.section}</Label>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="
                      data-[state=delayed-open]:animate-in 
                      data-[state=delayed-open]:fade-in-0 
                      data-[state=closed]:animate-out 
                      data-[state=closed]:fade-out-0 
                      data-[state=closed]:duration-200">
                          <span>
                            {sector.hint}
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </div>

              {/*Sector Section*/}
              <div className="flex flex-col gap-2 m-2">
                <Label>Sector News</Label>
                <div className="grid grid-cols-3 gap-2 m-2">
                  {sectors.map((sector, index) => (
                    <div key={index} className="flex m-2 gap-2">
                      <Checkbox
                        checked={checkedItems.includes(sector.key)}
                        onCheckedChange={(checked) => handleCheckboxChange(sector.key, !!checked)}
                        id={sector.key}
                      />
                      <Label htmlFor={sector.key}>{sector.sector}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/*Asset Section*/}
              <div className="flex flex-col gap-2 m-2">
                <Label>Asset News</Label>
                <div className="grid grid-cols-3 gap-2 m-2">
                  {tickers.map((sector, index) => (
                    <div key={index} className="flex m-2 gap-2">
                      <Checkbox
                        checked={checkedItems.includes(sector.key)}
                        onCheckedChange={(checked) => handleCheckboxChange(sector.key, !!checked)}
                        id={sector.key}
                      />
                      <Label htmlFor={sector.key}>{sector.ticker}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      )}





    </>
  )
}