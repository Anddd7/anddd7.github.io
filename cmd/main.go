package main

import (
	"log"

	"github.com/spf13/cobra"
)

var (
	rootCmd = &cobra.Command{
		Use:   "blog",
		Short: "a tool to init the blogs",
	}
)

func init() {
	rootCmd.AddCommand(CreateCmd)
	rootCmd.AddCommand(PublishCmd)
}

func main() {
	if err := rootCmd.Execute(); err != nil {
		log.Fatalf("💢Failed with %s", err)
	}
	log.Println("👍Done")
}

type blog struct {
	title    string
	filename string
	year     int
}
