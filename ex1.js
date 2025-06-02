public class ExemploSimples {
    public static void main(String[] args) {
        // Duas variáveis de tipos diferentes
        int idade = 20;
        double saldo = 1500.50;

        // Operador aritmético
        double saldoComBonus = saldo + 500.00;

        // Operador lógico e estrutura condicional
        if (idade >= 18 && saldoComBonus >= 2000) {
            System.out.println("Você é maior de idade e tem saldo suficiente para o investimento.");
        } else if (idade >= 18 && saldoComBonus < 2000) {
            System.out.println("Você é maior de idade, mas não tem saldo suficiente.");
        } else {
            System.out.println("Você é menor de idade. Não pode realizar investimentos.");
        }

        // Exibir o saldo final
        System.out.println("Seu saldo final é: " + saldoComBonus);
    }
}
